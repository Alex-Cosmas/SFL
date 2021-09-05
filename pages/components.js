import ParentLayout from '~/components/Layout/ParentLayout'
import CartComponent from '~/components/Shared/Cart'
import ContactMe from '~/components/Shared/ContactMe'
import Form from '~/components/Shared/Form'
import Headline from '~/components/Shared/Headline'
import Profile from '~/components/Shared/Profile'
import ToastNotification from '~/components/Shared/ToastNotification'
import Toggle from '~/components/Shared/Toggle'

export default function Components(props) {
  return (
    <>
      <Headline title='Components' cart={props.current} />

      <div className='container px-24 mx-auto'>
        <div className=''>
          <div className=''>
            <div className='mt-10'>
              <p className='text-lg font-medium text-secondary'>
                1. Toast Notification
              </p>
            </div>
            <ToastNotification />
          </div>

          <hr className='my-3 border-b-1 text-secondary' />

          <div className='mt-10'>
            <p className='text-lg font-medium text-secondary'>
              2. Toogle Button
            </p>
          </div>
          <div className='inline-flex items-center justify-center p-3 bg-white shadow-md'>
            <div>
              <Toggle />
            </div>
          </div>

          <hr className='my-3 border-b-1 text-secondary' />

          <div className='mt-10'>
            <p className='text-lg font-medium text-secondary'>
              3. Cart Component
            </p>
          </div>
          <CartComponent />

          <hr className='my-3 border-b-1 text-secondary' />

          <div className='mt-10'>
            <p className='text-lg font-medium text-secondary'>
              4. Form Component
            </p>
          </div>
          <Form />

          <hr className='my-3 border-b-1 text-secondary' />

          <div className='mt-10'>
            <p className='text-lg font-medium text-secondary'>
              5. Chefs Profile
            </p>
          </div>
          <Profile />

          <div className='mt-10'>
            <p className='text-lg font-medium text-secondary'>
              6. Get in touch
            </p>
          </div>
          <ContactMe />
        </div>
      </div>
    </>
  )
}

Components.Layout = ParentLayout
