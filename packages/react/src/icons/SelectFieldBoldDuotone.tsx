import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SelectFieldBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SelectFieldBoldDuotone = memo(
  forwardRef<SVGSVGElement, SelectFieldBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.85 10.5a1 1 0 1 1 1.3 1.5l-1.75 1.5a1 1 0 0 1-1.23.07l-.07-.06-1.75-1.5a1 1 0 1 1 1.3-1.52l1.1.94z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.2 5q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 14.43 1 13.2v-2.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 5 6.8 5zM6.8 7c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 3 10.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h10.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-2.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C18.64 7 18.06 7 17.2 7z" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M11 11a1 1 0 1 1 0 2H5.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

SelectFieldBoldDuotone.displayName = 'SelectFieldBoldDuotone';

// Triple export pattern (lucide-react style)
export { SelectFieldBoldDuotone, SelectFieldBoldDuotone as SelectFieldBoldDuotoneIcon, SelectFieldBoldDuotone as SiSelectFieldBoldDuotone };
export type { SelectFieldBoldDuotoneProps };
