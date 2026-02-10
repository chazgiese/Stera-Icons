import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderOpenFillProps = Omit<IconBaseProps, 'children'>;

const FolderOpenFill = memo(
  forwardRef<SVGSVGElement, FolderOpenFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-open-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.67 3.63c.45 0 .82-.01 1.17.07q.45.11.83.35c.31.19.57.45.89.77l.12.12c.38.38.47.46.56.52q.15.09.33.13c.1.03.23.04.76.04h3.82q.73 0 1.25.02.54.03 1.03.24.78.37 1.24 1.1.27.48.36 1t.17 1.24l.04.4q.23 0 .42.02c.3.02.62.08.92.26q.66.38.94 1.1c.12.33.12.65.1.95q-.04.43-.15 1.01l-.44 2.66c-.12.7-.2 1.27-.32 1.74q-.16.7-.52 1.28c-.4.6-.98 1.09-1.64 1.39q-.64.25-1.35.3t-1.77.04H7.28q-.96.01-1.6-.04a3 3 0 0 1-1.25-.35q-.27-.15-.5-.36-.62-.46-1.04-1.13a4 4 0 0 1-.47-1.38q-.12-.73-.22-1.86l-.72-7.15q-.1-.9-.11-1.5c-.01-.43.03-.84.2-1.23.25-.6.7-1.1 1.26-1.4q.57-.29 1.2-.32.6-.04 1.5-.03zM5.54 5.38c-.63 0-1.05 0-1.36.02s-.44.07-.51.11q-.34.2-.5.55c-.03.08-.06.2-.06.52 0 .31.05.73.11 1.35l.5 4.95.14-.85q.07-.44.14-.76.08-.35.29-.7.34-.5.9-.76.38-.15.73-.17t.77-.01h11.8l-.03-.2q-.08-.74-.15-1.1c-.05-.25-.1-.36-.13-.42a1 1 0 0 0-.49-.43 1 1 0 0 0-.42-.08c-.26-.02-.6-.02-1.12-.02h-3.82c-.45 0-.82 0-1.17-.08q-.45-.12-.83-.35c-.31-.19-.57-.45-.89-.77l-.12-.12a4 4 0 0 0-.56-.52q-.15-.09-.33-.13c-.1-.03-.22-.03-.76-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderOpenFill.displayName = 'FolderOpenFill';

// Triple export pattern (lucide-react style)
export { FolderOpenFill, FolderOpenFill as FolderOpenFillIcon, FolderOpenFill as SiFolderOpenFill };
export default FolderOpenFill;
export type { FolderOpenFillProps };
