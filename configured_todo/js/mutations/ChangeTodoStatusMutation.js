// @flow
import type {ChangeTodoStatusMutation_todo$key} from 'relay/ChangeTodoStatusMutation_todo.graphql';
import type {ChangeTodoStatusMutation_user$key} from 'relay/ChangeTodoStatusMutation_user.graphql';

import {useCallback} from 'react';
import {graphql, useFragment, useMutation} from 'react-relay';

const mutation = graphql`
  mutation ChangeTodoStatusMutation($input: ChangeTodoStatusInput!) {
    changeTodoStatus(input: $input) {
      todo {
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

export function useChangeTodoStatusMutation(
  userRef: ChangeTodoStatusMutation_user$key,
  todoRef: ChangeTodoStatusMutation_todo$key,
): (boolean) => void {
  const user = useFragment(
    graphql`
      fragment ChangeTodoStatusMutation_user on User {
        idfield
        userId
        completedCount
      }
    `,
    userRef,
  );
  const todo = useFragment(
    graphql`
      fragment ChangeTodoStatusMutation_todo on Todo {
        idfield
      }
    `,
    todoRef,
  );
  const [commit] = useMutation(mutation);

  return useCallback(
    (complete: boolean) => {
      const payload = {
        idfield: todo.idfield,
        complete,
      };
      commit({
        variables: {
          input: {
            userId: user.userId,
            ...payload,
          },
        },
        optimisticResponse: {
          changeTodoStatus: {
            todo: payload,
            user: {
              idfield: user.idfield,
              completedCount: user.completedCount + (complete ? 1 : -1),
            },
          },
        },
      });
    },
    [user, todo, commit],
  );
}
