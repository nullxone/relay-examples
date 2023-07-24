// @flow
import type {RenameTodoMutation_todo$key} from 'relay/RenameTodoMutation_todo.graphql';

import {useCallback} from 'react';
import {graphql, useFragment, useMutation} from 'react-relay';

const mutation = graphql`
  mutation RenameTodoMutation($input: RenameTodoInput!) {
    renameTodo(input: $input) {
      todo {
        idfield
        text
      }
    }
  }
`;

export function useRenameTodoMutation(
  todoRef: RenameTodoMutation_todo$key,
): (string) => void {
  const todo = useFragment(
    graphql`
      fragment RenameTodoMutation_todo on Todo {
        idfield
        text
      }
    `,
    todoRef,
  );
  const [commit] = useMutation(mutation);

  return useCallback((text: string) => {
    const payload = {
      idfield: todo.idfield,
      text,
    };
    commit({
      variables: {
        input: payload,
      },
      optimisticResponse: {
        renameTodo: {
          todo: payload,
        },
      },
    });
  });
}
