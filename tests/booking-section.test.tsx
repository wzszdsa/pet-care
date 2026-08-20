import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { BookingSection } from '../components/booking-section';

describe('BookingSection', () => {
  it('provides a required date and time picker for the expected arrival time', () => {
    const markup = renderToStaticMarkup(<BookingSection />);

    expect(markup).toContain('name="customerName"');
    expect(markup).toContain('name="phone"');
    expect(markup).toContain('name="petName"');
    expect(markup).toContain('name="petType"');
    expect(markup).toContain('name="service"');
    expect(markup).toContain('>期望到店时间</label>');
    expect(markup).toContain('id="appointment-time"');
    expect(markup).toContain('name="appointmentTime"');
    expect(markup).toContain('type="datetime-local"');
    expect(markup).toContain('name="note"');
    expect(markup).toContain('maxLength="100"');
    expect(markup).toContain('maxLength="20"');
    expect(markup).toContain('maxLength="80"');
    expect(markup).toContain('maxLength="1000"');
    expect(markup).toMatch(/<input[^>]*required=""[^>]*name="customerName"/);
    expect(markup).toMatch(/<input[^>]*required=""[^>]*name="phone"/);
    expect(markup).toMatch(/<input[^>]*required=""[^>]*name="petName"/);
    expect(markup).toMatch(/<select[^>]*name="petType"[^>]*required=""/);
    expect(markup).toMatch(/<select[^>]*name="service"[^>]*required=""/);
    expect(markup).toMatch(/<input[^>]*required=""[^>]*name="appointmentTime"/);
    expect(markup).toContain('type="submit"');
    expect(markup).toContain('type="button"');
    expect(markup).toContain('aria-live="polite"');
    expect(markup).toMatch(/min="\d{4}-\d{2}-\d{2}T\d{2}:\d{2}"/);
    expect(markup).toMatch(/value="\d{4}-\d{2}-\d{2}T09:30"/);
  });
});
