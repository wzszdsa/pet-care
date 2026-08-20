import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { BookingSection } from '../components/booking-section';

describe('BookingSection', () => {
  it('provides a required date and time picker for the expected arrival time', () => {
    const markup = renderToStaticMarkup(<BookingSection />);

    expect(markup).toContain('>期望到店时间</label>');
    expect(markup).toContain('id="appointment-time"');
    expect(markup).toContain('name="appointmentTime"');
    expect(markup).toContain('type="datetime-local"');
    expect(markup).toContain('required=""');
    expect(markup).toMatch(/min="\d{4}-\d{2}-\d{2}T\d{2}:\d{2}"/);
    expect(markup).toMatch(/value="\d{4}-\d{2}-\d{2}T09:30"/);
  });
});
