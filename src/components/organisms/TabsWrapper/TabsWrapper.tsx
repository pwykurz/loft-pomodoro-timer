import TogglePanel from '@/components/molecules/TogglePanel'
import YTPlayerList from '@/components/organisms/YTPlayerList'

import styles from './TabsWrapper.module.scss'

const TabsWrapper = () => (
  <div>
    <TogglePanel header='ToDos'>TOdosy</TogglePanel>
    <TogglePanel className={{ header: styles.tab1 }} header='Choose music'>
      <YTPlayerList />
    </TogglePanel>
  </div>
)

export default TabsWrapper
