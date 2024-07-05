import React from 'react';
import { useState } from 'react';
import { Select, Space } from 'antd';
import AddBlock from './AddBlock';
import Block from './Block';
import {DndContext, closestCorners } from "@dnd-kit/core";
import {SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';









const Body = () => {
  const [Blocks, setBlocks] = useState([]); 

  const handleoption = (value) => {
    if(value == 'Text'){
    console.log(Blocks.length);
    setBlocks([...Blocks, <Block key={Blocks.length} id={`Block-${Blocks.length}`}/>]);}
  };

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: Block.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  

return (
  <Space wrap>
    <Select
      defaultValue=""
      style={{
        width: 120,
      }}
       onSelect={handleoption}
      options={[
        {
          value: 'Text',
          label: 'Add Text',
          
        },
        {
          value: 'Image',
          label: 'Add Image',
        },
      ]}
    />
       
       <DndContext collisionDetection={closestCorners}>
        <div className='dragblock'>        
        <SortableContext items={Blocks} strategy={verticalListSortingStrategy}>
         {Blocks.map((block, index, id) => ( 
          <div  ref={setNodeRef} style={style} {...attributes} {...listeners} key={index}  >
             {console.log(index)}
             {block}
             </div> 
          ))}
          </SortableContext>
        
        </div>

       </DndContext>
       
    
     
    
  </Space>
);
};
export default Body;