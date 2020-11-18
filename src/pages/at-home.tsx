import TextEditor from '@components/editor/editor';

export default function AtHomePage() {
  return (
    <div className='uk-container-large' style={{ height: '90vh', margin: '10em auto', position: 'relative' }}>
      <div className='uk-width-small-* uk-text-center'>
        <h1 className='uk-text-light'>At Home Workouts</h1>
        <TextEditor />
      </div>
    </div>
  );
}
