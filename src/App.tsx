import React, { useState } from 'react';
import './App.css';
import { keyItemInterface, keypadInterface } from './Interfaces';
import { InputDiv, KeyDiv } from './styledItems';

function App() {

  const [keypadItem, setKeypadItem] = useState<keypadInterface>({
    id: 1,
    keys: [
      [
        {
          value: '3',
          type: 'number'
        },
        {
          value: '8',
          type: 'number'
        },
        {
          value: '4',
          type: 'number'
        }
      ],
      [
        {
          value: '1',
          type: 'number'
        },
        {
          value: '9',
          type: 'number'
        },
        {
          value: '2',
          type: 'number'
        }
      ],
      [
        {
          value: '7',
          type: 'number'
        },
        {
          value: '5',
          type: 'number'
        },
        {
          value: '6',
          type: 'number'
        }
      ],
      [
        {
          value: '3',
          type: 'number'
        },
        {
          value: '8',
          type: 'number'
        },
        {
          value: '4',
          type: 'number'
        }
      ],
      [
        {
          value: '@',
          type: 'reset'
        },
        {
          value: '0',
          type: 'number'
        },
        {
          value: '←',
          type: 'delete'
        }
      ]
    ]
  })

  const [selected, setSelected] = useState<number[][]>([]);

  const onkeySelect = (
    e: React.MouseEvent<HTMLDivElement>, 
      i:number, 
      i2:number,
      key: keyItemInterface
    ) => {
      if(key.type === "number") setSelected([...selected, [i, i2]])
      else if(key.type === "reset") setSelected([])
      else if(key.type === "delete") {
        let newSelected = [...selected];
        newSelected.pop();
        setSelected(newSelected);
      }
  }

  return (
    <div className='root'>

      <InputDiv>
        {selected.map(() => '*')}
      </InputDiv>

      {
        keypadItem.keys.map((keys, i) => {
          return (
            <div className='line' key={i}>
              {
                keys.map((key, i2) => {
                  return (
                    <KeyDiv key={i2} onClick={e => onkeySelect(e, i, i2, key)}>
                      {
                        key.value
                      }
                    </KeyDiv>
                  )
                })
              }
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
