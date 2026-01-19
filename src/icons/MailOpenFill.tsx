import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MailOpenFillProps = Omit<IconBaseProps, 'children'>;

const MailOpenFill = memo(
  forwardRef<SVGSVGElement, MailOpenFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-open-fill" {...props}>
      <path fill="currentColor" d="M22 18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.99l.39.28 6.31 4.88a4 4 0 0 0 2.45.83h1.37a4 4 0 0 0 2.36-.77l6.71-4.92.41-.3z" />
        <path fill="currentColor" d="M9.52 2.58a4.2 4.2 0 0 1 4.96 0l5.8 4.26q.66.49 1.09 1.17l-.95.68h-.01l-6.71 4.92a2 2 0 0 1-1.18.4h-1.37a2 2 0 0 1-1.22-.43L3.6 8.71 3.6 8.7l-.02-.01L2.63 8a4 4 0 0 1 1.09-1.17z" />
    </IconBase>
  ))
);

MailOpenFill.displayName = 'MailOpenFill';

// Triple export pattern (lucide-react style)
export { MailOpenFill, MailOpenFill as MailOpenFillIcon, MailOpenFill as SiMailOpenFill };
export default MailOpenFill;
export type { MailOpenFillProps };
