
import styles from './index.module.css';
import { Ui1 } from '@nextrepo2/ui1'
import { jslib } from '@nextrepo2/jslib'


const foo = 'foo';
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      {jslib()}
      <Ui1 />

    </div>
  );
};

export default Index;
