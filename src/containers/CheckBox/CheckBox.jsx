import React from 'react';

import styles from './CheckBox.module.scss';

const CheckBox = ({ category, checkedList, handleCheckedList }) => {
  const { id, name } = category;
  const isChecked = checkedList.find((checkedId) => +checkedId === +id);

  const onCheckboxHandler = () => {
    const checkedIndex = checkedList.findIndex(
      (checkedId) => +checkedId === +id
    );
    if (checkedIndex >= 0) {
      handleCheckedList((checkList) => {
        const copyArr = [...checkList];
        copyArr.splice(checkedIndex, 1);
        return copyArr;
      });
    } else {
      handleCheckedList((checkList) => [...checkList, +id]);
    }
  };

  return (
    <div className={styles.checkBoxWrap}>
      <input
        type='checkbox'
        className={styles.input}
        checked={Boolean(isChecked)}
        onChange={onCheckboxHandler}
      />
      <label className={styles.label}>
        <div className={styles.checkMark} />
      </label>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default CheckBox;
