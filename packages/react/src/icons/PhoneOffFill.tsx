import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PhoneOffFillProps = Omit<IconBaseProps, 'children'>;

const PhoneOffFill = memo(
  forwardRef<SVGSVGElement, PhoneOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 7.5q2.78-.03 5.62.5c1.79.36 3.26.98 4.29 1.95a5 5 0 0 1 1.59 3.86c0 .53 0 1.22-.17 1.74a1.4 1.4 0 0 1-.53.75q-.4.26-.89.19l-.14-.02h-.01l-.02-.01-3.12-.83a8 8 0 0 1-1.4-.46q-.52-.23-.77-.64a1.5 1.5 0 0 1-.16-.81c.01-.28.04-.44.04-.74q0-.3-.3-.5a3 3 0 0 0-1.11-.35c-.97-.15-2.11-.1-2.92-.1-.8 0-1.95-.05-2.92.1q-.73.1-1.1.35-.32.2-.31.5c0 .3.03.46.04.74 0 .23 0 .52-.16.8-.16.3-.43.49-.77.65q-.49.23-1.4.46l-3.12.83h-.03q-.57.13-1.03-.16a1.4 1.4 0 0 1-.53-.75C.5 15.03.5 14.35.5 13.81q.01-2.39 1.6-3.86A8.6 8.6 0 0 1 6.37 8q2.84-.55 5.62-.5" />
    </IconBase>
  ))
);

PhoneOffFill.displayName = 'PhoneOffFill';

export { PhoneOffFill };
export type { PhoneOffFillProps };
