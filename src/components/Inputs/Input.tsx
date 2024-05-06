import { theme } from '@/theme/theme';
import { Form } from 'react-bootstrap';

interface Props {
  label: string;
  id: string;
  placeholder?: string;
  form: string;
}

export const InputField = ({ label, id, placeholder, form }: Props) => {
  return (
    <>
      <Form.Group
        className="mb-4 form-group"
        controlId={form} >
        <Form.Label
          style={{
            fontWeight: 'bold',
            fontSize: 'small',
            fontFamily: theme.typography.fontFamily,
            color: theme.colors.textPrimary
          }}>{label}:
        </Form.Label>
        <Form.Control
          type={id}
          placeholder={placeholder || ''}
          style={{
            border: `3px solid ${theme.colors.borderInput}`,
            backgroundColor: theme.colors.blackLight
          }} />
      </Form.Group>
    </>
  );
}

