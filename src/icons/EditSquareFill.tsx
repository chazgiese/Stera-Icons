import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EditSquareFillProps = Omit<IconBaseProps, 'children'>;

const EditSquareFill = memo(
  forwardRef<SVGSVGElement, EditSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="edit-square-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.82 1.82a4.5 4.5 0 0 1 6.36 6.36l-.18.19V16a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h7.64l.17-.17zm4.95 1.41a2.5 2.5 0 0 0-3.54 0l-.45.47-7.55 7.75-.63 3.98 4.17-.45 7.51-7.71.48-.5a2.5 2.5 0 0 0 0-3.54" clipRule="evenodd" />
    </IconBase>
  ))
);

EditSquareFill.displayName = 'EditSquareFill';

// Triple export pattern (lucide-react style)
export { EditSquareFill, EditSquareFill as EditSquareFillIcon, EditSquareFill as SiEditSquareFill };
export type { EditSquareFillProps };
