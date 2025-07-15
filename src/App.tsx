import BGContainer from './components/BGContainer';
import Container from './components/Container';
import bgImage from './assets/bg.jpg';
import List from './components/List';
// img
import imag1 from './assets/image/1.jpg';
import imag2 from './assets/image/2.jpg';
import imag3 from './assets/image/3.jpg';
// img name
import imagName1 from './assets/1name.jpg';
import imagName2 from './assets/2name.jpg';
import imagName3 from './assets/3name.jpg';

const comments = [
  {
    id: 1,
    name: 'Ethan Morgan',
    position: 'Founder and CEO, Serene Living Products',
    description:
      'Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.',
    image: imag1,
    imgName: imagName1,
  },
  {
    id: 2,
    name: 'Olivia Hayes',
    position: 'Owner, Starlight Creations',
    description:
      'Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.',
    image: imag2,
    imgName: imagName2,
  },
  {
    id: 3,
    name: 'Alexander Reed',
    position: 'Co-Founder, Opulent Living Group',
    description:
      'Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.',
    image: imag3,
    imgName: imagName3,
  },
];
function App() {
  return (
    <BGContainer bg={bgImage}>
      <Container>
        <h1 className="text-center  font-bold text-[48px] leading-[41px] mb-[34px] ">
          Voices of Success with Sales Fortuna
        </h1>
        <List comments={comments} />
      </Container>
    </BGContainer>
  );
}

export default App;
