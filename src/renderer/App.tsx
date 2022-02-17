import './App.css';
import ActionBar from './layout/ActionBar';
import ContentContainer from './layout/ContentContainer';
import Sidebar from './layout/Sidebar';

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <ActionBar />
      <ContentContainer />
    </div>
  );
}
