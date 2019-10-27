<template>
  <div class="wrapper">
	<div class="animated fadeIn">
	  <b-row>

			<!-- Customer information -->
			<b-col cols="12">
				<b-card header-tag="header" footer-tag="footer" class="card-accent-primary">
					<div slot="header">
						<i class="icons cui-list mr-2"></i>
						<strong>
							Customer information
						</strong>
					</div>
				</b-card>
			</b-col>

			<!-- Line chart: Total number of URLs in the last 7 day	 -->
			<b-col cols="12">
				<b-card header-tag="header" footer-tag="footer" class="card-accent-primary">
					<div slot="header">
						<i class="icons cui-list mr-2"></i>
						<strong>
							Line chart: Total number of URLs in the last 7 day
						</strong>
					</div>
				</b-card>
			</b-col>

			<!-- Table: Table: type of sources -->
			<b-col cols="6">
				<b-card header-tag="header" footer-tag="footer" class="card-accent-primary">
					<div slot="header">
						<i class="icons cui-list mr-2"></i>
						<strong>Table: type of sources</strong>
					</div>
				</b-card>
			</b-col>

			<!-- Doughnut Chart: type of URLs-->
			<b-col cols="6">
				<b-card header-tag="header" footer-tag="footer" class="card-accent-primary">
					<div slot="header">
						<i class="icons cui-list mr-2"></i>
						<strong>Doughnut Chart: type of URLs</strong>
					</div>
				</b-card>
			</b-col>

			<!-- Line chart: Location -->
			<b-col cols="6">
				<b-card header-tag="header" footer-tag="footer" class="card-accent-primary">
					<div slot="header">
						<i class="icons cui-list mr-2"></i>
						<strong>Line chart: Location</strong>
					</div>
				</b-card>
			</b-col>

			<!-- Pie chart: Device -->
			<b-col cols="6">
				<b-card header-tag="header" footer-tag="footer" class="card-accent-primary">
					<div slot="header">
						<i class="icons cui-list mr-2"></i>
						<strong>Pie chart: Device</strong>
					</div>
				</b-card>
			</b-col>

			<!-- Line chart: Days of week/ Hours of day -->
			<b-col cols="6">
				<b-card header-tag="header" footer-tag="footer" class="card-accent-primary">
					<div slot="header">
						<i class="icons cui-list mr-2"></i>
						<strong>Line chart: Days of week/ Hours of day</strong>
					</div>
				</b-card>
			</b-col>

	  </b-row>
	</div>
  </div>
</template>