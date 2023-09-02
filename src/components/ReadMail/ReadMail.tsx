import PlayerSupportSidebar from './PlayerSupportSidebar'
import playerData from '../PlayerSupport/playerSupportData'



interface playerData {
	name:string;
	notiLevel:string;
	notiAmount:string;
	message:string;
	date:number;
}


const PlayerSupportReadMail: React.FC<playerData> = ({name, notiLevel, notiAmount, date, message}) =>{
	// const data: any[] = [
	// 	{
	// 		id: '1',
	// 		name: 'Peter Pan, me',
	// 		notiLevel: 'support',
	// 		notiAmount: '(4)',
	// 		message: 'Hello – Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm.',
	// 		date:date.toDateString(),
	// 	}
	// ];
	return(

		<div className='flex-4 p-2 bg-white pSS2 ml-3 rounded fos12'>
			<div className='flex-h-new12'>
				<div className='rounded pssIconcarrier flex-v-new'>
					 <i className='bi-archive-fill'></i>
					 <i className='bi-exclamation-circle-fill ml-2'></i>
					 <i className='bi-trash ml-2'></i>
				</div>

				<div className='rounded pssIconcarrier flex-v-new'>
					 <i className='bi-folder-fill'></i>
					 <i className='bi-chevron-down ml-2'></i>
				</div>

				<div className='rounded pssIconcarrier flex-v-new'>
					 <i className='bi-tag-fill'></i>
					 <i className='bi-chevron-down ml-2'></i>
				</div>

				<div className='rounded pssIconcarrier flex-v-new'>
					 <div>
					 	More
					 </div>
					 <i className='bi-chevron-down ml-2'></i>
				</div>
			</div>

			<div>
				{playerData.id} dgfg
			</div>

		</div>
	)
}


export default PlayerSupportReadMail