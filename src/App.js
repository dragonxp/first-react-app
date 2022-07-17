import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
	const [showEvent, setShowEvent] = useState(true)
	const [showModal, setShowModal] = useState(false)

	const [events, setEvents] = useState([])

	const addEvent = (event) => {
		setEvents((prevEvents) => [...prevEvents, event])
		setShowModal(false)
	}

	const handleClick = id => {
		setEvents(prevEvents => prevEvents.filter(e => e.id !== id))
	}

	const subtitle = 'All the latest events in mario kingdom'

  return (
    <div className="App">
		<Title title='Mario Kingdom Events' subtitle={subtitle}/>

		{showEvent && (
			<div>
				<button onClick={() => setShowEvent(false)}>Hide Events</button>
			</div>
		)}
		{!showEvent && (
			<div>
				<button onClick={() => setShowEvent(true)}>Show Events</button>
			</div>
		)}

		{showEvent && <EventList events={events} handleClick={handleClick} />}

		{showModal && 
			<Modal setShowModal={setShowModal} isSalesModal={true}>
				<NewEventForm addEvent={addEvent} />
			</Modal>
		}

		<div>
			<button onClick={() => setShowModal(true)}>Add New Event</button>
		</div>
    </div>
  );
}

export default App;
