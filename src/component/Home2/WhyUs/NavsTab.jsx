import { Tabs, Placeholder } from 'rsuite';
import '@/style/Home2/WhyUs.css'
const NavsTab = () => (
    <div className='why-us my-4'>
        <Tabs defaultActiveKey="1" appearance="subtle" className='w-100'>
            <Tabs.Tab eventKey="1" title="Mission">
                <p>Must explain too you how all this mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.</p>
            </Tabs.Tab>
            <Tabs.Tab eventKey="2" title="Vision">
                <p>Must explain too mistaken idea of denouncing pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.</p>
            </Tabs.Tab>
            <Tabs.Tab eventKey="3" title="Values">
                <p>Must explain too  pleasures praising pain was born and we will give you complete account of the system the actual teachings of the great explorer.</p>
            </Tabs.Tab>
        </Tabs>
    </div>
);

export default NavsTab;