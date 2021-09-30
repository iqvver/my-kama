import * as React from 'react';
import classes from './Paginator.module.css'
import { styled } from '@material-ui/core';
import usePagination from '@mui/material/usePagination';

const List = styled('ul')({ //стиль пагинатора
  listStyle: 'none',
  padding: 1,
  margin: 2,
  display: 'flex',
});

let PaginatorUi = ({ pageSize, onPageChanged, totalUsersCount }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize); //вычисляем и рисуем все страницы
  const { items } = usePagination({
    count: pagesCount,
  });

  return ( //поведение пагинатора
    <nav> 
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;
          if (type === 'start-ellipsis' || type === 'end-ellipsis') { children = '…'; }
          else if (type === 'page') {
            children = (
              <button type="button"
                style={{ fontWeight: selected ? 'bold' : undefined, }}
                {...item}>
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>{type}</button>
            );
          }
          return <li key={index} onClick={(e) => { onPageChanged(page); }}>{children}</li>; //событие нп нажатие кнопки
        })}
      </List>
    </nav>
  );
}

export default PaginatorUi;