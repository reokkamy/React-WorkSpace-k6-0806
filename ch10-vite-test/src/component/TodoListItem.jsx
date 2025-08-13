import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
//<MdCheckBoxOutlineBlank />
//<MdCheckBox />
// <MdRemoveCircleOutline />
import '../styles/TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <div className="TodoListItem">
      {/*classnames , cn 별칭 지정하고, 조건부 렌더링 적용하기.*/}
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        {' '}
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
