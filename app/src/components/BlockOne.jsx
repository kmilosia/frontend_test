import RadioButton from './RadioButton';

const BlockOne = () => {
  return (
    <section className='block-one'>
        <h2>BLOK PIERWSZY</h2>
        <div className='radio-group-container'>
            <RadioButton value="option-one" title="Opcja pierwsza" />
            <RadioButton value="option-two" title="Opcja druga" />
            <RadioButton value="option-random" title="Opcja losowa" />
        </div>
    </section>
  )
}

export default BlockOne
