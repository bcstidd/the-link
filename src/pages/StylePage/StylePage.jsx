import { Link } from 'react-router-dom';
import { artists } from '../../data';
import StyleCard from '../../components/StyleCard/StyleCard';

export default function StylePage() {
  function StylePage(props) {
    const { styles } = props;
  
    return (
      <div>
        <h2>Styles</h2>
        <ul>
          {styles.map((style) => (
            <li key={style}>
              <Link to={`/artists?style=${style}`}>{style}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
          }
        }