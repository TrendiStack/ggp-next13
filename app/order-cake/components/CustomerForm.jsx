import DateSelect from '@/app/components/ui/DateSelect';
import UserInput from '@/app/components/ui/UserInput';
import CakeLabel from './CakeLabel';

const CustomerForm = ({ page, setForm, handleCustomer, error }) => {
  return (
    <div className={`${page === 2 ? 'grid' : 'hidden'} grid-cols-1 gap-2 `}>
      <div>
        <CakeLabel htmlFor="name" title="Name">
          Name
        </CakeLabel>
        <UserInput
          type="text"
          id="name"
          name="name"
          inputType="input"
          onChange={handleCustomer}
          error={error.name}
          placeholder="e.g. John Doe"
          required
        />
      </div>
      <div>
        <CakeLabel htmlFor="email" title="Email">
          Email
        </CakeLabel>
        <UserInput
          type="email"
          id="email"
          name="email"
          inputType="input"
          onChange={handleCustomer}
          error={error.email}
          placeholder="e.g. example@gmail.com  "
          required
        />
      </div>
      <div>
        <CakeLabel htmlFor="phone" title="Phone">
          Phone
        </CakeLabel>
        <UserInput
          type="tel"
          id="phone"
          name="phone"
          inputType="input"
          onChange={handleCustomer}
          error={error.phone}
          placeholder="e.g. 905 123 4567"
          required
        />
      </div>
      <DateSelect setForm={setForm} />
      <div>
        <CakeLabel htmlFor="message" title="Special instructions">
          Special instructions
        </CakeLabel>
        <UserInput
          type="text"
          id="message"
          name="message"
          inputType="textarea"
          onChange={handleCustomer}
          error={error.message}
          placeholder="e.g. general theme, color, etc."
          required
        />
      </div>
    </div>
  );
};

export default CustomerForm;
