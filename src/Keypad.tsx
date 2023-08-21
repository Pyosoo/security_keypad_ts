import React, { useState } from 'react';
import { keyItemInterface, keypadInterface } from './Interfaces';
import { MyInput, KeyDiv } from './styledItems';

function Keypad() {

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
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  console.log(selected)
  const onkeySelect = (
    e: React.MouseEvent<HTMLDivElement>, 
      i:number, 
      i2:number,
      key: keyItemInterface
    ) => {
      if (key.type === "number" && selected.length < 6) {
        setSelected(prevSelected => {
          const newSelected = [...prevSelected, [i, i2]];
          if (newSelected.length === 6) {
            setInputFocused(false);
          }
          return newSelected;
        });
      }
      else if(key.type === "reset") setSelected([])
      else if(key.type === "delete") {
        let newSelected = [...selected];
        newSelected.pop();
        setSelected(newSelected);
      }
  }
  return (
    <div 
      className='root'
    >
      {selected.length}
      <MyInput 
        value={'*'.repeat(selected.length)}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
          setInputFocused(true)
        }}
      />

      {
        inputFocused ?
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
        :
        null
      }

    </div>
  );
}

export default Keypad;
