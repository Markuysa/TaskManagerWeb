import React from 'react';
import '../../../css/components/table.css'

const TableList = ({items, renderItem}) => {
  return (
      <div className="table-list">
        {items && items.map((item) => (
            <div key={item.ID} className="table-item">
              {renderItem(item)}
            </div>
        ))}
      </div>
  );
};

export default TableList;