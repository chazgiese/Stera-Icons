import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AirplaneRegularProps = Omit<IconBaseProps, 'children'>;

const AirplaneRegular = memo(
  forwardRef<SVGSVGElement, AirplaneRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="airplane" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.28 3.25c.82 0 1.59.4 2.07 1.05l3.73 5.15h3c.92 0 1.8.36 2.44 1.01l1.01 1.01a.75.75 0 0 1 0 1.06l-1 1c-.66.65-1.53 1.02-2.45 1.02h-3l-3.73 5.15a2.6 2.6 0 0 1-2.07 1.05h-1.1a1.2 1.2 0 0 1-1.1-1.68l2-4.56-2.5-.08-.8 1.42c-.34.59-.96.95-1.64.95H3.5a1.2 1.2 0 0 1-1.19-1.33L2.7 12 2.3 8.53a1.2 1.2 0 0 1 1.2-1.33h.63c.68 0 1.3.36 1.64.95l.8 1.42 2.5-.08-2-4.56a1.2 1.2 0 0 1 1.1-1.68zm1.6 6.65a.75.75 0 0 1-.66 1.05l-4.04.14a.8.8 0 0 1-.68-.39L4.47 8.9a.4.4 0 0 0-.33-.2h-.3l.36 3.22v.17l-.36 3.22h.3q.22 0 .33-.2l1.03-1.8c.13-.25.4-.4.68-.39l4.05.14.09.01a.75.75 0 0 1 .57 1.04l-2.24 5.15h.63c.34 0 .65-.16.85-.43l3.96-5.46q.23-.3.61-.31h3.38c.52 0 1.02-.2 1.38-.57l.48-.48-.48-.48a2 2 0 0 0-1.38-.57H14.7a.8.8 0 0 1-.6-.3l-3.97-5.47c-.2-.27-.51-.43-.85-.43h-.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

AirplaneRegular.displayName = 'AirplaneRegular';

// Triple export pattern (lucide-react style)
export { AirplaneRegular, AirplaneRegular as AirplaneRegularIcon, AirplaneRegular as SiAirplaneRegular };
export default AirplaneRegular;
export type { AirplaneRegularProps };
