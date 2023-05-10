import DateSelect from '@/app/components/ui/DateSelect';
import UserInput from '@/app/components/ui/UserInput';

const CustomerForm = ({ page, setForm, handleCustomer, error }) => {
  return (
    <div className={`${page === 2 ? 'grid' : 'hidden'} grid-cols-1 gap-2 `}>
      <div>
        <label htmlFor="name">Name</label>
        <UserInput
          type="text"
          id="name"
          name="name"
          inputType="input"
          onChange={handleCustomer}
          error={error.name}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <UserInput
          type="email"
          id="email"
          name="email"
          inputType="input"
          onChange={handleCustomer}
          error={error.email}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <UserInput
          type="tel"
          id="phone"
          name="phone"
          inputType="input"
          onChange={handleCustomer}
          error={error.phone}
          required
        />
      </div>
      <DateSelect setForm={setForm} />
      <div>
        <label htmlFor="message">Special instructions</label>
        <UserInput
          type="text"
          id="message"
          name="message"
          inputType="textarea"
          onChange={handleCustomer}
          error={error.message}
          required
        />
      </div>
    </div>
  );
};

export default CustomerForm;
