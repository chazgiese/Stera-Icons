import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlertHexagonRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertHexagonRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlertHexagonRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.91 2.25c1.26 0 2.05 0 2.78.22q.95.3 1.68.94c.58.5.98 1.19 1.64 2.26l1.6 2.6c.7 1.17 1.16 1.9 1.34 2.7q.22 1.03 0 2.06c-.18.8-.64 1.53-1.35 2.7l-1.59 2.6c-.66 1.07-1.06 1.76-1.64 2.25q-.74.65-1.68.95c-.73.23-1.52.22-2.78.22H10.1c-1.26 0-2.05 0-2.78-.22q-.95-.3-1.68-.95c-.58-.5-.98-1.18-1.64-2.25l-1.59-2.6c-.71-1.17-1.17-1.9-1.35-2.7a5 5 0 0 1 0-2.06c.18-.8.64-1.53 1.35-2.7l1.59-2.6c.66-1.07 1.06-1.76 1.64-2.25a5 5 0 0 1 1.68-.95c.73-.23 1.52-.22 2.78-.22zm-3.82 1.5c-1.36 0-1.88 0-2.33.15q-.64.21-1.15.65c-.36.3-.63.75-1.34 1.9l-1.59 2.6c-.77 1.26-1.05 1.75-1.16 2.24q-.15.71 0 1.42c.1.5.4.98 1.16 2.24l1.59 2.6c.7 1.15.98 1.6 1.34 1.9q.51.45 1.15.65c.45.14.97.15 2.33.15h3.82c1.36 0 1.88 0 2.33-.15q.63-.21 1.15-.65a8 8 0 0 0 1.34-1.9l1.6-2.6c.76-1.26 1.04-1.75 1.15-2.24q.15-.71 0-1.42c-.1-.5-.4-.98-1.16-2.24l-1.59-2.6a8 8 0 0 0-1.34-1.9q-.52-.45-1.15-.65a8 8 0 0 0-2.33-.15z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 15.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AlertHexagonRegularDuotone.displayName = 'AlertHexagonRegularDuotone';

export { AlertHexagonRegularDuotone };
export type { AlertHexagonRegularDuotoneProps };
