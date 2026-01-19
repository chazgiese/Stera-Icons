import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type IdVBoldProps = Omit<IconBaseProps, 'children'>;

const IdVBold = memo(
  forwardRef<SVGSVGElement, IdVBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="id-v-bold" {...props}>
      <path fill="currentColor" d="M15 5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M15.2 1q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v10.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4l-1.17.04H7.92q-.66 0-1.17-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1zM11 18h-.15A3 3 0 0 0 8 20.85V21h8a3 3 0 0 0-3-3zM8.8 3c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 5 6.8v10.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82a2 2 0 0 0 .79.82 5 5 0 0 1 2.85-4.25 4 4 0 1 1 6.27 0A5 5 0 0 1 18 20.73a2 2 0 0 0 .8-.82c.07-.16.14-.38.17-.82.04-.45.04-1.03.04-1.89V6.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C16.64 3 16.06 3 15.2 3zm3.2 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

IdVBold.displayName = 'IdVBold';

// Triple export pattern (lucide-react style)
export { IdVBold, IdVBold as IdVBoldIcon, IdVBold as SiIdVBold };
export default IdVBold;
export type { IdVBoldProps };
