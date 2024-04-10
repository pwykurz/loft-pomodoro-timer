import TodoList from '@/components/molecules/TodoList/TodoList'
import TogglePanel from '@/components/molecules/TogglePanel'
import YTPlayerList from '@/components/organisms/YTPlayerList'

import styles from './TabsWrapper.module.scss'

const TabsWrapper = () => (
  <div>
    <TogglePanel className={{ header: styles.tab1 }} header='ToDos'>
      <TodoList />
    </TogglePanel>
    <TogglePanel header='Choose music'>
      <YTPlayerList />
    </TogglePanel>
  </div>
)

export default TabsWrapper
