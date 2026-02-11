import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TagRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TagRegularDuotone = memo(
  forwardRef<SVGSVGElement, TagRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tag-duotone" {...props}>
      <path fillRule="evenodd" d="M11.66 3c.45 0 .8 0 1.13.08q.42.09.8.33c.3.18.54.43.86.75l4.44 4.43q.87.87 1.4 1.47.55.61.78 1.3c.25.75.25 1.56 0 2.32q-.23.69-.78 1.3-.53.6-1.4 1.46l-2.45 2.45q-.86.87-1.46 1.4-.61.55-1.3.78c-.76.25-1.57.25-2.32 0a4 4 0 0 1-1.3-.78q-.6-.53-1.47-1.4l-4.43-4.44c-.32-.32-.57-.57-.75-.86a3 3 0 0 1-.33-.8C3 12.46 3 12.11 3 11.66V6.95q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM6.95 4.5c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v4.7c0 .53 0 .67.03.8q.05.18.15.36c.07.1.17.2.54.58l4.44 4.44c.6.6 1.02 1.02 1.37 1.32s.58.43.8.5q.69.21 1.38 0c.22-.07.45-.2.8-.5s.77-.72 1.37-1.32l2.45-2.45c.6-.6 1.02-1.02 1.32-1.37s.43-.58.5-.8q.21-.69 0-1.39a2 2 0 0 0-.5-.79c-.3-.35-.72-.77-1.32-1.37l-4.44-4.44a4 4 0 0 0-.58-.54 1 1 0 0 0-.37-.15 4 4 0 0 0-.78-.03z" clipRule="evenodd" opacity={.4} />
        <path d="M8.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

TagRegularDuotone.displayName = 'TagRegularDuotone';

// Triple export pattern (lucide-react style)
export { TagRegularDuotone, TagRegularDuotone as TagRegularDuotoneIcon, TagRegularDuotone as SiTagRegularDuotone };
export default TagRegularDuotone;
export type { TagRegularDuotoneProps };
