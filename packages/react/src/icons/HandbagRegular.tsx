import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandbagRegularProps = Omit<IconBaseProps, 'children'>;

const HandbagRegular = memo(
  forwardRef<SVGSVGElement, HandbagRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25A4.75 4.75 0 0 1 16.75 7v1.27q.77.03 1.36.27.94.4 1.55 1.21c.47.64.67 1.47.98 2.7l.6 2.4q.39 1.49.55 2.46c.1.65.12 1.24-.05 1.8a3.8 3.8 0 0 1-1.64 2.1c-.5.3-1.07.42-1.73.48q-.98.08-2.52.06h-7.7q-1.55.02-2.51-.06a4 4 0 0 1-1.74-.48 3.8 3.8 0 0 1-1.64-2.1 4 4 0 0 1-.05-1.8q.16-.96.55-2.46l.6-2.4c.31-1.23.5-2.06.98-2.7q.62-.81 1.55-1.2.59-.25 1.36-.28V7A4.75 4.75 0 0 1 12 2.25m-3.25 7.5c-1.41 0-1.9.01-2.28.18q-.56.23-.93.72c-.25.33-.38.8-.72 2.17l-.6 2.4a30 30 0 0 0-.53 2.32 2.5 2.5 0 0 0 0 1.12c.17.53.52.98.99 1.26.21.13.52.23 1.09.28s1.32.05 2.38.05h7.7c1.06 0 1.81 0 2.38-.05a2.5 2.5 0 0 0 1.1-.28c.46-.28.82-.73.98-1.26a2.5 2.5 0 0 0 0-1.12c-.1-.57-.27-1.3-.53-2.32l-.6-2.4c-.34-1.37-.47-1.84-.72-2.17a2.3 2.3 0 0 0-.93-.72c-.38-.17-.87-.18-2.28-.18zm3.25-6A3.25 3.25 0 0 0 8.75 7v1.25h6.5V7c0-1.8-1.45-3.25-3.25-3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

HandbagRegular.displayName = 'HandbagRegular';

export { HandbagRegular };
export type { HandbagRegularProps };
