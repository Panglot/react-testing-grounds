import { ReactNode, useRef, useState } from 'react';
import ListGroup from './components/ListGroup'
import Alert from './components/Alert';

export default function MoshHome() {
    const [listGroupItemsState, setListGroupItemsState] = useState(['nad', 'smulchanite', 'poleta', 'peqt', 'koledni', 'zvuncheta']);
    const alertRef = useRef(null);

    const handleSelectItem = (item: string) => {
        // console.log(item);
    }

    const handleDeleteItem = (index: number) => {
        let newGroupItemsState = listGroupItemsState;
        newGroupItemsState.splice(index,1);
        setListGroupItemsState([...newGroupItemsState]);
    }

    const handleAddItem = (item: string) => {
        setListGroupItemsState([...listGroupItemsState, item])
    }

    return (
        <>
            <h2 className='text-4xl font-bold mb-10'>Home page for mosh course</h2>
            <div className='columns-1 sm:columns-2 gap-10'>
                <div className='border-l border-orange-500 p-2 w-full'>
                    <h3 className='text-lg font-bold border-b border-orange-500 text-orange-600'>List group part</h3>
                    <div className='mb-10'>
                        <ListGroup items={listGroupItemsState} onItemDeleted={handleDeleteItem} onItemAdded={handleAddItem}/>
                    </div>
                </div>
                <div className='w-full'>
                    <h3 className='text-lg font-bold border-b border-orange-500 text-orange-600'>Alert part</h3>
                    <div className='mb-10 mt-2'>
                        <button className='text-white bg-orange-500 hover:bg-orange-600 focus:outline-none rounded-full text-sm py-1 px-2 text-center leading-0 inline-flex items-center ml-2'
                            onClick={(e) => {
                                // if(alertRef?.current)
                                // alertRef.current.setAlertVisibility(true);
                            }}>
                            Add
                        </button>
                        <Alert title='Warning' ref={alertRef}>
                            Something bad is going on
                            <p className='text-lg font-bold'>Noice</p>
                        </Alert>
                    </div>
                </div>
            </div>
        </>
    )
}
