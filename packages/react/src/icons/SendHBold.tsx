import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SendHBoldProps = Omit<IconBaseProps, 'children'>;

const SendHBold = memo(
  forwardRef<SVGSVGElement, SendHBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M2.03 4.98a2.25 2.25 0 0 1 2.98-3.1l16.2 8.1a2.25 2.25 0 0 1 0 4.03l-16.2 8.1a2.25 2.25 0 0 1-2.98-3.09L5.86 12zm1.93-1.33q-.07 0-.13.08a.3.3 0 0 0-.08.13q-.01.06.04.16L7.59 11H14a1 1 0 0 1 0 2H7.6l-3.81 6.98a.2.2 0 0 0-.04.16q.01.06.08.13.06.07.13.08.06.02.16-.03l16.2-8.1a.25.25 0 0 0 0-.44l-16.2-8.1a.2.2 0 0 0-.16-.03" clipRule="evenodd" />
    </IconBase>
  ))
);

SendHBold.displayName = 'SendHBold';

export { SendHBold };
export type { SendHBoldProps };
