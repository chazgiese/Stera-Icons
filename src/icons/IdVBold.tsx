import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type IdVBoldProps = Omit<IconBaseProps, 'children'>;

const IdVBold = memo(
  forwardRef<SVGSVGElement, IdVBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="id-v-bold" {...props}>
      <path d="M14.5 5.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2z" />
        <path fillRule="evenodd" d="M14.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v8.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4l-.65.04H8.4l-.27-.02-.38-.02a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 17.43 4 16.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zm-3.1 15.5a2.6 2.6 0 0 0-2.6 2.49l1.3.01h4.4l1.3-.01a2.6 2.6 0 0 0-2.6-2.49zM9.8 4c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 6 7.8v8.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82a2 2 0 0 0 .34.47A4.6 4.6 0 0 1 9 16.01a3.75 3.75 0 1 1 6 0 4.6 4.6 0 0 1 2.44 3.37 2 2 0 0 0 .34-.47c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V7.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C15.64 4 15.06 4 14.2 4zm2.2 8a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

IdVBold.displayName = 'IdVBold';

// Triple export pattern (lucide-react style)
export { IdVBold, IdVBold as IdVBoldIcon, IdVBold as SiIdVBold };
export default IdVBold;
export type { IdVBoldProps };
