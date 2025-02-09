// @flow
import type {RemoveCompletedTodosMutation_user$key} from 'relay/RemoveCompletedTodosMutation_user.graphql';
import type {RemoveCompletedTodosMutation_todoConnection$key} from 'relay/RemoveCompletedTodosMutation_todoConnection.graphql';

import {useCallback} from 'react';
import {graphql, useFragment, useMutation} from 'react-relay';

const mutation = graphql`
  mutation RemoveCompletedTodosMutation(
    $connections: [ID!]!
    $input: RemoveCompletedTodosInput!
  ) {
    removeCompletedTodos(input: $input) {
      deletedTodoIds @deleteEdge(connections: $connections)
      user {
        idfield
        completedCount
        totalCount
      }
    }
  }
`;

export function useRemoveCompletedTodosMutation(
  userRef: RemoveCompletedTodosMutation_user$key,
  todoConnectionRef: RemoveCompletedTodosMutation_todoConnection$key,
): () => void {
  const user = useFragment(
    graphql`
      fragment RemoveCompletedTodosMutation_user on User {
        idfield
        userId
        totalCount
      }
    `,
    userRef,
  );
  const todoConnection = useFragment(
    graphql`
      fragment RemoveCompletedTodosMutation_todoConnection on TodoConnection {
        __id
        edges {
          node {
            idfield
            complete
          }
        }
      }
    `,
    todoConnectionRef,
  );
  const [commit] = useMutation(mutation);

  return useCallback(() => {
    const completedTodoIds = todoConnection.edges
      .filter((edge) => edge.node.complete)
      .map((edge) => edge.node.idfield);

    commit({
      variables: {
        input: {
          userId: user.userId,
        },
        connections: [todoConnection.__id],
      },
      optimisticResponse: {
        removeCompletedTodos: {
          deletedTodoIds: completedTodoIds,
          user: {
            idfield: user.idfield,
            completedCount: 0,
            totalCount: user.totalCount - completedTodoIds.length,
          },
        },
      },
    });
  }, [commit, user, todoConnection]);
}
