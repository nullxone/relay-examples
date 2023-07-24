// @flow
import type {MarkAllTodosMutation_user$key} from 'relay/MarkAllTodosMutation_user.graphql';
import type {MarkAllTodosMutation_todoEdge$key} from 'relay/MarkAllTodosMutation_todoEdge.graphql';

import {useCallback} from 'react';
import {graphql, useFragment, useMutation} from 'react-relay';

const mutation = graphql`
  mutation MarkAllTodosMutation($input: MarkAllTodosInput!) {
    markAllTodos(input: $input) {
      changedTodos {
        idfield
        complete
      }
      user {
        idfield
        completedCount
      }
    }
  }
`;

export function useMarkAllTodosMutation(
  userRef: MarkAllTodosMutation_user$key,
  todoEdgeRef: MarkAllTodosMutation_todoEdge$key,
): (boolean) => void {
  const user = useFragment(
    graphql`
      fragment MarkAllTodosMutation_user on User {
        idfield
        userId
        totalCount
      }
    `,
    userRef,
  );
  const todos = useFragment(
    graphql`
      fragment MarkAllTodosMutation_todoEdge on TodoEdge @relay(plural: true) {
        node {
          idfield
        }
      }
    `,
    todoEdgeRef,
  );
  const [commit] = useMutation(mutation);

  return useCallback(
    (complete: boolean) => {
      commit({
        variables: {
          input: {
            userId: user.userId,
            complete,
          },
        },
        optimisticResponse: {
          markAllTodos: {
            changedTodos: todos.map(({node: {idfield}}) => ({
              idfield,
              complete,
            })),
            user: {
              idfield: user.idfield,
              completedCount: complete ? user.totalCount : 0,
            },
          },
        },
      });
    },
    [commit, user, todos],
  );
}
