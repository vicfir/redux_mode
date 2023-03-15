import React from 'react'
import { useSelector } from 'react-redux'

export const Main = () => {

    const mode = useSelector(state => state.mode);

  return (
    <main className='text-center'>
        <h1 className='text-4xl font-semibold my-12'>{mode === 'light-mode'?"Light ":mode === 'dark-mode'?'Dark ': mode === 'red-mode'?'Red ':mode === 'blue-mode'?'Blue ':null} Mode</h1>

        <p className='my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate consectetur animi fugit veniam doloribus, autem sequi veritatis commodi reiciendis ipsam eaque accusamus nam possimus perferendis ducimus nostrum nulla aut impedit error necessitatibus doloremque dolor libero? Fuga, numquam dolores saepe est similique inventore natus minima, corporis tempore ipsa alias ducimus.</p>
        <p className='my-8'>Sint earum sunt temporibus eius veritatis reprehenderit sit exercitationem ab, minima quae molestiae quas magnam incidunt? Eaque accusantium ullam asperiores nisi magni, tempora consequatur ad atque assumenda quidem voluptates, non qui. Placeat, esse! Eveniet similique nostrum non sint animi. Eos, quod soluta delectus sequi inventore pariatur at doloribus quae. Saepe!</p>
        <p className='my-8'>Nam, atque praesentium voluptatem excepturi dolore eum eligendi suscipit, accusamus amet repudiandae repellendus nemo. Consequuntur repellendus harum quaerat officia architecto et possimus? Doloremque voluptatibus expedita laudantium sed amet quia accusamus a minima pariatur libero. Cum reprehenderit distinctio tempore veniam esse cupiditate neque ad, facere dolorum soluta magnam delectus, optio aliquam!</p>
    </main>
  )
}
