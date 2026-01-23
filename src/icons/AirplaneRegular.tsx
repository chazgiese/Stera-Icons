import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AirplaneRegularProps = Omit<IconBaseProps, 'children'>;

const AirplaneRegular = memo(
  forwardRef<SVGSVGElement, AirplaneRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="airplane" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.97 2.25c.89 0 1.72.43 2.24 1.15l4.18 5.85h3.37c1 0 1.95.4 2.65 1.1l1.12 1.12a.75.75 0 0 1 0 1.06l-1.12 1.12c-.7.7-1.66 1.1-2.65 1.1h-3.37L11.2 20.6a2.8 2.8 0 0 1-2.24 1.15H7.76c-.9 0-1.5-.92-1.15-1.74l2.27-5.3-2.95-.1-.92 1.63a2 2 0 0 1-1.74 1.01h-.71c-.75 0-1.33-.65-1.24-1.39L1.75 12l-.43-3.86c-.09-.74.5-1.39 1.24-1.4h.7a2 2 0 0 1 1.75 1.02l.92 1.62 2.95-.1L6.6 4a1.25 1.25 0 0 1 1.15-1.74zM10.7 9.7a.75.75 0 0 1-.66 1.05l-4.5.15a.8.8 0 0 1-.68-.38L3.7 8.5a.5.5 0 0 0-.44-.25h-.43l.4 3.67.01.1v.06l-.41 3.67h.43a.5.5 0 0 0 .44-.25l1.14-2.02c.14-.24.4-.39.68-.38l4.5.15a.75.75 0 0 1 .66 1.05l-2.55 5.95h.83c.4 0 .78-.2 1.02-.52l4.4-6.17q.23-.3.61-.31h3.76c.6 0 1.17-.24 1.59-.66l.59-.59-.6-.59c-.41-.42-.99-.66-1.58-.66H15a.8.8 0 0 1-.61-.31l-4.4-6.17a1.3 1.3 0 0 0-1.02-.52h-.83z" clipRule="evenodd" />
    </IconBase>
  ))
);

AirplaneRegular.displayName = 'AirplaneRegular';

// Triple export pattern (lucide-react style)
export { AirplaneRegular, AirplaneRegular as AirplaneRegularIcon, AirplaneRegular as SiAirplaneRegular };
export default AirplaneRegular;
export type { AirplaneRegularProps };
