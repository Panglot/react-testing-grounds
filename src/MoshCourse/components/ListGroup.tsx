import React, { useRef, useState } from 'react'

interface Props {
    items: any;
    onItemSelected?: (item: string) => void;
    onItemDeleted: (index: number) => void;
    onItemAdded: (item: string) => void;
}

// Or destructure props { data }: Props and use directly

function ListGroup({ items, onItemSelected = () => {}, onItemDeleted, onItemAdded }: Props) {
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const addItemInputRef = useRef<HTMLInputElement>(null);

    const listClick = (index: number) => {
        return (event: React.MouseEvent) => {
            setHighlightIndex(index)
        }
    }

    const addItemToListPiece = () => {
        return (
            <div className='my-2'>
                <input
                    type='text'
                    className='font-medium px-2 border border-orange-500 rounded focus:border-orange-600 focus:ring-orange-200'
                    placeholder='Add list item'
                    ref={addItemInputRef}
                />
                <button className='text-white bg-orange-500 hover:bg-orange-600 focus:outline-none rounded-full text-sm py-1 px-2 text-center leading-0 inline-flex items-center ml-2'
                    onClick={(e) => {
                        if(addItemInputRef?.current?.value) {
                            onItemAdded(addItemInputRef.current.value);
                            addItemInputRef.current.value = '';
                        }
                    }}>
                    Add
                </button>
            </div>
        )
     }

    const displayList = () => {
        if (items.length) {
            return (
                <>
                    <ul className='list-disc list-inside'>
                        {items.map((item: string, index: number) => (
                            <li
                                key={index}
                                onClick={(e) => {
                                    listClick(index)(e)
                                    onItemSelected(item)
                                }} //if curried and multi call it wont call itself
                                className={
                                    ' ' +
                                    (highlightIndex === index
                                        ? ' bg-orange-300'
                                        : 'cursor-pointer hover:bg-orange-200')
                                }
                            >
                                {item}
                                <button className='align-middle text-white bg-orange-500 hover:bg-orange-600 focus:outline-none rounded-full p-1 text-sm text-center leading-0 inline-flex items-center ml-2' onClick={() => {onItemDeleted(index)}}> {/* Wrapping events allows skipping curried functions and you can pass event to multiple functions */}
                                    <svg className="fill-current h-4 w-4 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                </button>

                            </li>
                        ))}
                    </ul>
                </>
            )
        }
        return null
    }

    return (
        <>
            <h2 className='text-lg'>Basic List</h2>
            {addItemToListPiece()}
            {!items.length && <p>No items in the list</p>}
            {displayList()}
        </>
    )
}

export default ListGroup
