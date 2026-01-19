import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailFillProps = Omit<IconBaseProps, 'children'>;

const MailFill = memo(
  forwardRef<SVGSVGElement, MailFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-fill" {...props}>
      <path fill="currentColor" d="M23 17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7.5l.38.28 7.5 6a5 5 0 0 0 6.24 0l7.5-6L23 7.5z" />
        <path fill="currentColor" d="M19 3a4 4 0 0 1 3.62 2.29l-1.22.91h-.01l-.02.02-7.5 6a3 3 0 0 1-3.74 0l-7.5-6-.02-.01-.01-.01-1.22-.91A4 4 0 0 1 5 3z" />
    </IconBase>
  ))
);

MailFill.displayName = 'MailFill';

// Triple export pattern (lucide-react style)
export { MailFill, MailFill as MailFillIcon, MailFill as SiMailFill };
export default MailFill;
export type { MailFillProps };
