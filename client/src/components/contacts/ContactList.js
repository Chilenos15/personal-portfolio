import { Link } from 'react-router-dom';

const ContactList = ({ contacts }) => {
  return (
    <>
      { contacts.map( b => 
        <>
          <Link to={`/contacts/${b.id}`} key={b.id}>{b.name}</Link>
          <br />
        </>
      )}
    </>
  )
}

export default ContactList;