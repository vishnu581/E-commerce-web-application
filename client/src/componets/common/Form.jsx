

const CommonFrom = (formControls,formData ,setFromData,onSubmit,buttonText)=> {


  function renderinputByComponentType(getControlItem){
    let element =null
    const value = FormData[getControlItem.name] || ''

    switch (getControlItem.componetType) {
        case 'input':
            element=<Input 
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={event = setFormData({
                ...formData,
                [getControlItem.name] :event.target.value,
            })}
            />

            
            break;
        case 'select':
            element=< Select onValueChange={(value=> setFromData({
                ...formData,
                [getControlItem.name] : value
            }))} value={value} >
            <SelectTrigger className="w-full">
                <SelectValue placeholder={getControlItem.placeholder}/>


            </SelectTrigger>
             <SelectContent>
                {
                    getControlItem.option && 
                    getControlItem.option.lenghth >0 ?
                    getControlItem.option.map(optionItem=><SelectItem key = {optionItem.id}value={optionItem.lable}><SelectItem/>): null
                }

             </SelectContent>
       
            

            />

            
            break;
        case 'textarea':
            element=(
                <textarea 

                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.id}
                value={value}
            
            onChange={event = setFormData({
                ...formData,
                [getControlItem.name] :event.target.value,
            })}
                />
            )

            
            break;
    

        default:


        element=<Input 
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
              value={value}
            onChange={event = setFormData({
                ...formData,
                [getControlItem.name] :event.target.value,
            })}
            />

            break;
    }
    return element
  }


  return (
    <form onSubmit={onSubmit}> 

        <div className='flex flex-col gap-3'>
            {

            formControls.map(contrlItem=> <div className='grid w-full gap-1.5' key={contrlItem.name}>
                <Lable className="mb-1">{contrlItem.Lable}</Lable>{

                    renderinputByComponentType(contrlItem)

                }
                <div/>)
            
            }

        </div>

        <Button type="submit" className="mt-2 w-full ">{buttonText || 'Submit'}</Button>

    </form>
  )
}

export default CommonFrom