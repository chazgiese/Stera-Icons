import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertHexagonBoldProps = Omit<IconBaseProps, 'children'>;

const AlertHexagonBold = memo(
  forwardRef<SVGSVGElement, AlertHexagonBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-hexagon-bold" {...props}>
      <path fill="currentColor" d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.5a1 1 0 0 1 1 1V12a1 1 0 0 1-2 0V7.5a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M14.2 3c.95 0 1.65-.01 2.3.2a4 4 0 0 1 1.45.85c.5.46.83 1.08 1.3 1.9l1.8 3.2c.45.8.8 1.4.92 2.04a4 4 0 0 1 0 1.62c-.13.65-.47 1.23-.92 2.03l-1.8 3.2c-.47.83-.8 1.45-1.3 1.91a4 4 0 0 1-1.46.85c-.64.21-1.34.2-2.3.2H9.81c-.96 0-1.66.01-2.3-.2a4 4 0 0 1-1.46-.85c-.5-.46-.83-1.08-1.3-1.9l-1.8-3.2c-.45-.8-.8-1.4-.92-2.04a4 4 0 0 1 0-1.62c.13-.65.47-1.23.92-2.03l1.8-3.2c.47-.83.8-1.45 1.3-1.91a4 4 0 0 1 1.46-.85c.64-.21 1.34-.2 2.3-.2zM9.8 5c-1.08 0-1.4.01-1.67.1a2 2 0 0 0-.73.42c-.2.2-.37.47-.9 1.42l-1.8 3.2a6 6 0 0 0-.72 1.45 2 2 0 0 0 0 .82c.06.26.2.54.72 1.45l1.8 3.2c.53.95.7 1.23.9 1.42q.32.29.73.42c.27.09.59.1 1.68.1h4.38c1.1 0 1.41-.01 1.68-.1a2 2 0 0 0 .73-.42 6 6 0 0 0 .9-1.42l1.8-3.2c.52-.91.66-1.19.72-1.45a2 2 0 0 0 0-.82c-.06-.26-.2-.54-.72-1.45l-1.8-3.2a6 6 0 0 0-.9-1.42 2 2 0 0 0-.73-.42c-.27-.09-.59-.1-1.68-.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertHexagonBold.displayName = 'AlertHexagonBold';

// Triple export pattern (lucide-react style)
export { AlertHexagonBold, AlertHexagonBold as AlertHexagonBoldIcon, AlertHexagonBold as SiAlertHexagonBold };
export default AlertHexagonBold;
export type { AlertHexagonBoldProps };
