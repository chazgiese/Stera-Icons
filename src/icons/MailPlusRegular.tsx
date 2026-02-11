import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailPlusRegularProps = Omit<IconBaseProps, 'children'>;

const MailPlusRegular = memo(
  forwardRef<SVGSVGElement, MailPlusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="mail-plus" {...props}>
      <path d="M18 13.25c.41 0 .75.34.75.75v2.25H21a.75.75 0 0 1 0 1.5h-2.25V20a.75.75 0 0 1-1.5 0v-2.25H15a.75.75 0 0 1 0-1.5h2.25V14c0-.41.33-.75.75-.75" />
        <path fillRule="evenodd" d="M16.2 4.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03V12a.75.75 0 0 1-1.5 0V8.97l-5.47 3.95a4.75 4.75 0 0 1-5.56 0L3.75 8.97v5.23c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04H13a.75.75 0 0 1 0 1.5H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V9.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-8.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99l-.1.24 6.2 4.48c1.13.82 2.67.82 3.8 0l6.2-4.48q-.04-.13-.1-.24a2.3 2.3 0 0 0-.98-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailPlusRegular.displayName = 'MailPlusRegular';

// Triple export pattern (lucide-react style)
export { MailPlusRegular, MailPlusRegular as MailPlusRegularIcon, MailPlusRegular as SiMailPlusRegular };
export default MailPlusRegular;
export type { MailPlusRegularProps };
