import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SelectFieldFillProps = Omit<IconBaseProps, 'children'>;

const SelectFieldFill = memo(
  forwardRef<SVGSVGElement, SelectFieldFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="select-field-fill" {...props}>
      <path fillRule="evenodd" d="M17.2 5q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 14.43 1 13.2v-2.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 5 6.8 5zm2.06 5.6a1 1 0 0 0-1.41-.1l-1.1.93-1.1-.94a1 1 0 1 0-1.3 1.52l1.75 1.5.07.06a1 1 0 0 0 1.23-.06l1.75-1.5a1 1 0 0 0 .1-1.41M5.5 11a1 1 0 1 0 0 2H11a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

SelectFieldFill.displayName = 'SelectFieldFill';

// Triple export pattern (lucide-react style)
export { SelectFieldFill, SelectFieldFill as SelectFieldFillIcon, SelectFieldFill as SiSelectFieldFill };
export default SelectFieldFill;
export type { SelectFieldFillProps };
