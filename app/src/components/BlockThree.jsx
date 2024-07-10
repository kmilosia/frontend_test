import React from 'react'
import useBlocksStore from '../store/blocksStore';

const BlockThree = () => {
    const { textContent } = useBlocksStore()
  return (
    <section className='block-three'>
        <h2>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE JEŻELI BĘDZIE ZA DŁUGA</h2>
        {textContent?.map(({id, content}) => (
            <p key={id}>{content}</p>
        ))}
    </section>
  )
}

export default BlockThree
