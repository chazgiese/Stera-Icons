import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HourglassRegularProps = Omit<IconBaseProps, 'children'>;

const HourglassRegular = memo(
  forwardRef<SVGSVGElement, HourglassRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14.68 6.33a.75.75 0 0 1 .35 1.32l-1.28 1.03q-.38.3-.68.68-.27.35-.37.8-.2.91-.2 1.83 0 1.56.3 3.11c.1.54.39 1.03.77 1.41l1.96 1.96a.75.75 0 0 1-.53 1.28H9a.75.75 0 0 1-.53-1.28l1.96-1.96q.59-.59.77-1.4.3-1.56.3-3.12 0-.9-.2-1.83-.1-.45-.37-.8-.3-.37-.68-.68L8.97 7.65a.75.75 0 0 1 .47-1.33h5.24" />
        <path fill="currentColor" fillRule="evenodd" d="M17 1.25A2.75 2.75 0 0 1 19.75 4v1.12c0 2.05-.93 3.99-2.53 5.27l-1.29 1.02a.75.75 0 0 0 0 1.18l1.29 1.02a6.8 6.8 0 0 1 2.53 5.27V20A2.75 2.75 0 0 1 17 22.75H7A2.75 2.75 0 0 1 4.25 20v-1.12c0-2.05.93-3.99 2.53-5.27l1.29-1.02a.75.75 0 0 0 0-1.18L6.78 10.4a6.8 6.8 0 0 1-2.53-5.27V4A2.75 2.75 0 0 1 7 1.25zM7 2.75c-.69 0-1.25.56-1.25 1.25v1.12c0 1.6.73 3.1 1.97 4.1L9 10.24a2.25 2.25 0 0 1 0 3.52l-1.28 1.02a5.3 5.3 0 0 0-1.97 4.1V20c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25v-1.12c0-1.6-.73-3.1-1.97-4.1L15 13.76a2.25 2.25 0 0 1 0-3.52l1.28-1.02c1.24-1 1.97-2.5 1.97-4.1V4c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

HourglassRegular.displayName = 'HourglassRegular';

export { HourglassRegular };
export type { HourglassRegularProps };
