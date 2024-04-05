import TabPanel from '@/components/molecules/TabPanel/TabPanel'
import TabsList from '@/components/molecules/TabsList/TabsList'

const TabsWrapper = () => (
  <div>
    <TabsList tabs={['test 1', 'test 2']} />
    <TabPanel />
  </div>
)

export default TabsWrapper
