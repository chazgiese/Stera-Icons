import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ApertureBoldProps = Omit<IconBaseProps, 'children'>;

const ApertureBold = memo(
  forwardRef<SVGSVGElement, ApertureBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a10.98 10.98 0 0 1 3.85 21.3A11 11 0 0 1 5 20.5a10.98 10.98 0 0 1 3.15-18.8Q9.96 1.02 12 1m2.33 14.85-.08.05-.06.03-6.7 3.86a9 9 0 0 0 7.01.86v-4.91zm2.16-4.11v.17l.01.09v7.8a9 9 0 0 0 4.24-5.64l-4.25-2.45zM3 12a9 9 0 0 0 2.76 6.49l4.25-2.45-.18-.1-.08-.04-.03-.02-.03-.02zm8.85-2.5-.1.01h-.03a3 3 0 0 0-.5.12l-.05.01-.38.17-.03.02h-.01l-.14.1q-.21.13-.38.3l-.06.07-.05.05q-.15.18-.29.4v.02a2.5 2.5 0 0 0-.32 1.4v.08a3 3 0 0 0 .3.97l.04.05.06.1q.14.22.32.4l.11.1a3 3 0 0 0 .37.27l.06.04a3 3 0 0 0 .56.23l.04.01.05.01a2.5 2.5 0 0 0 1.23-.01l.04-.02.24-.08.08-.03.06-.03.14-.07.02-.02q.02 0 .04-.02.3-.17.52-.4l.06-.07.1-.1q0-.02.03-.05l.17-.26.04-.06a2.5 2.5 0 0 0 .25-1.74l-.02-.1a2 2 0 0 0-.26-.62l-.01-.03-.08-.13-.01-.01-.29-.34-.1-.1-.06-.05-.3-.22-.02-.01h-.01a3 3 0 0 0-.68-.29l-.23-.04-.11-.01-.13-.02h-.28M7.5 4.2a9 9 0 0 0-4.24 5.64l4.25 2.45v-.22L7.5 12zm6.49 3.76.16.09.1.05.03.02.05.03L21 12a9 9 0 0 0-2.77-6.49zM12 3a9 9 0 0 0-2.5.35v4.9l.2-.11v-.01h.01l.05-.04.06-.03L16.5 4.2A9 9 0 0 0 12 3" clipRule="evenodd" />
    </IconBase>
  ))
);

ApertureBold.displayName = 'ApertureBold';

export { ApertureBold };
export type { ApertureBoldProps };
